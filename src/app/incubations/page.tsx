"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";
import ai from "@/Images/ai (1).png";

// Import necessary loaders and effects
// @ts-expect-error
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
// @ts-expect-error
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect";
// @ts-expect-error
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Link from "next/link";

// Define the AsciiModelViewer component
const AsciiModelViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      effect: AsciiEffect,
      controls: OrbitControls;
    let mesh: THREE.Mesh | null = null; // Declare mesh variable to hold the loaded model

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Optional: Set background color

    // Set up camera
    camera = new THREE.PerspectiveCamera(69, width / height, 0.1, 1000);
    camera.position.z = 100;

    // Initialize renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    // Append renderer to the DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Set up ASCII effect
    effect = new AsciiEffect(renderer, " .:-+*=%@#", { invert: true });
    effect.setSize(width, height);
    effect.domElement.style.color = "black";
    effect.domElement.style.backgroundColor = "white";

    // Replace renderer's canvas with ASCII effect canvas
    if (mountRef.current) {
      mountRef.current.removeChild(renderer.domElement);
      mountRef.current.appendChild(effect.domElement);
    }

    // Set up controls
    controls = new OrbitControls(camera, effect.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;

    // Load STL model
    const loader = new STLLoader();
    loader.load(
      "/untitled1.stl", // Update this path
      // @ts-expect-error
      (geometry) => {
        // Center the geometry
        geometry.center();

        const material = new THREE.MeshNormalMaterial();
        mesh = new THREE.Mesh(geometry, material);

        // Adjust the model's rotation to correct orientation
        mesh.rotation.x = -Math.PI / 2; // Rotate -90 degrees around x-axis
        mesh.rotation.z = Math.PI; // Rotate 180 degrees around z-axis

        scene.add(mesh);
      },
      (xhr: any) => {
        // Optional: Show loading progress
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error: any) => {
        console.error("An error happened while loading the STL model", error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      // Rotate the model around the z-axis
      if (mesh) {
        mesh.rotation.z += 0.02; // Adjust the rotation speed as desired
      }

      effect.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      effect.setSize(width, height);
    };
    window.addEventListener("resize", onWindowResize, false);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", onWindowResize);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="relative w-full h-full">
      <div className="md:flex hidden">
      {/* <Link href={"/home"} className="absolute bottom-24 left-8 p-2 text-black">Aegean</Link> */}
      <div className="absolute bottom-6 left-8 text-black text-sm font-mono w-96 p-2 rounded-md">
        We partner with founders to explore new ideas, build exceptional
        products, and launch world-class companies.
      </div>
      </div>
      <div className="md:hidden flex">
        <Link href={"/home"} className="absolute  left-[32%] mt-4 flex items-center">
          <Image src={ai} alt="ai" className=" w-5 md:w-8 mr-2"/>
          <span className=" text-sm md:text-2xl  text-black">Aegean Incubations</span>
        </Link>
      {/* <Link href={"/home"} className="absolute bottom-24 left-44 text-center text-black">Aegean</Link> */}
      <div className="absolute bottom-5 left-5 text-center text-black text-sm font-mono w-96 p-2 rounded-md">
        We partner with founders to explore new ideas, build exceptional
        products, and launch world-class companies.
      </div>

      </div>
    </div>
  );
};

export default AsciiModelViewer;
