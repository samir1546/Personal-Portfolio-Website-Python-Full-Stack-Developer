import React, { useEffect, useRef, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from "three"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function Final(props) {

  const group = useRef()
  const headBone = useRef(null)
  const mouse = useRef(new THREE.Vector2())

  const { scene, animations } = useGLTF('/models/Final.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  /* ▶ PLAY BASE ANIMATION */
  useEffect(() => {
    const action = actions?.[Object.keys(actions || {})[0]]
    action?.reset().fadeIn(0.5).play()
  }, [actions])

  /* ▶ FIND HEAD BONE SAFELY */
  useEffect(() => {
    if (!group.current) return

    group.current.traverse((obj) => {
      if (obj.isBone && obj.name.toLowerCase().includes("head")) {
        headBone.current = obj
      }
    })
  }, [])

  /* ▶ CURSOR → ONLY HEAD */
  useGSAP(() => {
    const onMouseMove = (e) => {
      if (!headBone.current) return

      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1

      headBone.current.rotation.order = "YXZ"

      gsap.to(headBone.current.rotation, {
        x: THREE.MathUtils.clamp(mouse.current.y * 0.3, -0.3, 0.3),
        y: THREE.MathUtils.clamp(mouse.current.x * 0.5, -0.5, 0.5),
        duration: 0.25,
        ease: "power2.out",
      })
    }

    window.addEventListener("mousemove", onMouseMove)
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />

      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />

      {/* 👀 EYES — SAFE */}
      <skinnedMesh
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary || {}}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences || []}
      />

      <skinnedMesh
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary || {}}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences || []}
      />

      {/* 🧠 HEAD — SAFE */}
      <skinnedMesh
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary || {}}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences || []}
      />

      <skinnedMesh
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary || {}}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences || []}
      />
    </group>
  )
}

useGLTF.preload('/models/Final.glb')




