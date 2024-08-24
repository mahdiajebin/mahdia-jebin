import React, { useEffect, useRef, useState } from 'react';

const TreeDrawing = () => {
  const canvasRef = useRef(null);
  const [theta, setTheta] = useState(0);
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const WIDTH = 200;
    const HEIGHT = 200;
    const TREE_DEPTH = 5;
    const BASE_LENGTH = 50;
    const BRANCH_ANGLE = 30 ; // Angle variance for branches

    // Function to generate branches
    const generateBranches = (x, y, length, angle, depth) => {
      if (depth === 0) return [];

      const newNodes = [];
      const xEnd = x + length * Math.cos(angle * Math.PI / 180);
      const yEnd = y + length * Math.sin(angle * Math.PI / 180);

      // Add branch
      newNodes.push({
        type: 'branch',
        x1: x,
        y1: y,
        x2: xEnd,
        y2: yEnd,
        depth: depth
      });

      // Add leaves
      if (depth > 0 && depth < TREE_DEPTH - 3 && Math.random() < 5) {
        for (let i = 0; i < 2; i++) {
          const percent = Math.random() * 1 + 0.1;
          const leafX = x + length * percent * Math.cos(angle * Math.PI / 180);
          const leafY = y + length * percent * Math.sin(angle * Math.PI / 180);
          newNodes.push({
            type: 'leaf',
            x: leafX,
            y: leafY,
            diameter: 5
          });
        }
      }

      // Add flowers
      if ((depth === 1 && Math.random() < 0.1) || (depth === 2 && Math.random() < 0.3)) {
        newNodes.push({
          type: 'flower',
          x: xEnd,
          y: yEnd,
          diameter:  2
        });
      }

      // Recursively generate branches
      newNodes.push(...generateBranches(xEnd, yEnd, length * 0.7, angle - BRANCH_ANGLE, depth - 1));
      newNodes.push(...generateBranches(xEnd, yEnd, length * 0.7, angle + BRANCH_ANGLE, depth - 1));
      newNodes.push(...generateBranches(xEnd, yEnd, length * 0.5, angle + BRANCH_ANGLE, depth - 1));

      newNodes.push(...generateBranches(xEnd, yEnd, length * 0.7, angle, depth - 1));
      newNodes.push(...generateBranches(xEnd, yEnd, length * 0.7, angle, depth - 1));


      return newNodes;
    };

    const drawTree = () => {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = 'rgb(230, 226, 202)';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      ctx.fillStyle = 'rgba(50, 30, 0.2)';
      ctx.beginPath();
      ctx.ellipse(WIDTH / 2, HEIGHT - 30, 100, 17, 0, 0, 2 * Math.PI);
      ctx.fill();

      ctx.strokeStyle = 'rgba(90, 165, 100, 0.7)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(WIDTH / 2, HEIGHT);
      ctx.lineTo(WIDTH / 2, HEIGHT - BASE_LENGTH);
      ctx.stroke();

      // Generate branches and other nodes
      const generatedNodes = generateBranches(WIDTH / 2, HEIGHT - BASE_LENGTH, BASE_LENGTH, -90, TREE_DEPTH);
      setNodes(generatedNodes);

      // Draw nodes
      nodes.forEach(node => {
        switch (node.type) {
          case 'branch':
            ctx.beginPath();
            ctx.moveTo(node.x1, node.y1);
            ctx.lineTo(node.x2, node.y2);
            ctx.strokeStyle = `rgb(${100 + node.depth * 10}, ${50 + node.depth * 10}, ${20 + node.depth * 10})`;
            ctx.lineWidth = node.depth;
            ctx.stroke();
            break;
          case 'leaf':
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.diameter, 0, 2 * Math.PI);
            ctx.fillStyle = `rgb(${Math.random() * 50 + 80}, ${Math.random() * 30 + 150}, ${Math.random() * 20 + 90})`;
            ctx.fill();
            break;
          case 'flower':
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.diameter, 0, 2 * Math.PI);
            ctx.fillStyle = `rgb(${Math.random() * 50 + 180}, ${Math.random() * 50 + 30}, ${Math.random() * 50 + 45})`;
            ctx.fill();
            break;
          default:
            break;
        }
      });
    };

    const animate = () => {
      setTheta(prevTheta => (prevTheta + 1) % 0); // Rotate the tree
      drawTree();
      requestAnimationFrame(animate);
    };

    drawTree(); // Initial draw
    animate(); // Start animation

    // Handle resizing
    const handleResize = () => {
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      drawTree();
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [nodes]);

  return <canvas ref={canvasRef} width="200" height="200" style={{ border: '1px solid black' }} />;
};

export default TreeDrawing;
