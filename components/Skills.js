"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const skills = [
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "Redux",
  "GraphQL",
  "Docker",
  "AWS",
];

function randomVelocity() {
  return (Math.random() * 2 + 0.5) * (Math.random() < 0.5 ? 1 : -1);
}

export default function Skills() {
  const containerRef = useRef(null);
  const tagsRefs = useRef([]);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const [tags, setTags] = useState(
    () =>
      skills.map(() => ({
        x: 0,
        y: 0,
        vx: randomVelocity(),
        vy: randomVelocity(),
        width: 0,
        height: 0,
      }))
  );

  // Measure container size (full width)
  useLayoutEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setContainerSize({ width, height });
    }
  }, []);

  // Measure each tag size dynamically
  useLayoutEffect(() => {
    setTags((prevTags) =>
      prevTags.map((tag, idx) => {
        const tagRect = tagsRefs.current[idx]?.getBoundingClientRect();
        if (tagRect?.width && tagRect?.height) {
          return {
            ...tag,
            width: tagRect.width,
            height: tagRect.height,
          };
        }
        return tag;
      })
    );
  }, [containerSize]);

  // Initialize random non-overlapping positions
  useEffect(() => {
    setTags((prevTags) => {
      const newPositions = [...prevTags];
      for (let i = 0; i < newPositions.length; i++) {
        let placed = false;
        let attempts = 0;
        while (!placed && attempts < 200) {
          attempts++;
          const x = Math.random() * (containerSize.width - newPositions[i].width);
          const y = Math.random() * (containerSize.height - newPositions[i].height);

          const collides = newPositions.some((tag, idx) => {
            if (idx === i) return false;
            return (
              x < tag.x + tag.width &&
              x + newPositions[i].width > tag.x &&
              y < tag.y + tag.height &&
              y + newPositions[i].height > tag.y
            );
          });

          if (!collides) {
            newPositions[i].x = x;
            newPositions[i].y = y;
            placed = true;
          }
        }
        if (!placed) {
          newPositions[i].x = Math.random() * (containerSize.width - newPositions[i].width);
          newPositions[i].y = Math.random() * (containerSize.height - newPositions[i].height);
        }
      }
      return newPositions;
    });
  }, [containerSize]);

  // Animate with collision detection on every frame
  useEffect(() => {
    let animationId;

    const updatePositions = () => {
      setTags((prev) => {
        const updated = prev.map((tag) => ({ ...tag }));
        for (let i = 0; i < updated.length; i++) {
          let tag = updated[i];
          tag.x += tag.vx;
          tag.y += tag.vy;

          // Bounce off walls
          if (tag.x <= 0) {
            tag.x = 0;
            tag.vx = -tag.vx;
          }
          if (tag.x + tag.width >= containerSize.width) {
            tag.x = containerSize.width - tag.width;
            tag.vx = -tag.vx;
          }
          if (tag.y <= 0) {
            tag.y = 0;
            tag.vy = -tag.vy;
          }
          if (tag.y + tag.height >= containerSize.height) {
            tag.y = containerSize.height - tag.height;
            tag.vy = -tag.vy;
          }

          // Tag to tag collision
          for (let j = i + 1; j < updated.length; j++) {
            let other = updated[j];

            if (
              tag.x < other.x + other.width &&
              tag.x + tag.width > other.x &&
              tag.y < other.y + other.height &&
              tag.y + tag.height > other.y
            ) {
              // Swap velocities
              const tempVx = tag.vx;
              const tempVy = tag.vy;
              tag.vx = other.vx;
              tag.vy = other.vy;
              other.vx = tempVx;
              other.vy = tempVy;

              // Push apart to prevent overlap
              const overlapX = Math.min(
                tag.x + tag.width - other.x,
                other.x + other.width - tag.x
              );
              const overlapY = Math.min(
                tag.y + tag.height - other.y,
                other.y + other.height - tag.y
              );

              if (overlapX < overlapY) {
                if (tag.x < other.x) {
                  tag.x -= overlapX / 2;
                  other.x += overlapX / 2;
                } else {
                  tag.x += overlapX / 2;
                  other.x -= overlapX / 2;
                }
              } else {
                if (tag.y < other.y) {
                  tag.y -= overlapY / 2;
                  other.y += overlapY / 2;
                } else {
                  tag.y += overlapY / 2;
                  other.y -= overlapY / 2;
                }
              }
            }
          }
        }
        return updated;
      });
      animationId = requestAnimationFrame(updatePositions);
    };

    animationId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animationId);
  }, [containerSize]);

  return (
    <section
      className="py-20 font-mono bg-gray-900"
      style={{ width: "100vw", height: "400px", overflow: "hidden" }}
    >
      <div
        ref={containerRef}
        className="relative w-full h-full"
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            ref={(el) => (tagsRefs.current[i] = el)}
            className="absolute px-4 py-2 bg-black border border-gray-700 rounded-full shadow-sm cursor-default select-none whitespace-nowrap"
            style={{
              transform: `translate(${tags[i].x}px, ${tags[i].y}px)`,
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
