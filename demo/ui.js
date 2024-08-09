import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { Billboard, LeafType, Tree, TreeType } from '@dgreenheck/tree-js';

const exporter = new GLTFExporter();
let gui = new GUI();

/**
 * Setups the UI
 * @param {Tree} tree
 */
export function setupUI(tree, renderer, scene, camera) {
  gui.destroy();
  gui = new GUI();

  gui.add(tree.params, 'seed', 0, 65536, 1).name('Seed');
  gui.add(tree.params, 'type', TreeType).name('Tree Type');

  const branchFolder = gui.addFolder('Branches').close();
  branchFolder.addColor(tree.params, 'tint').name('Tint');
  branchFolder.add(tree.params, 'flatShading').name('Flat Shading');
  branchFolder.add(tree.params, 'textured').name('Textured');
  branchFolder.add(tree.params, 'levels', 0, 3, 1).name('Levels');

  const branchAngleFolder = branchFolder.addFolder('Angle').close();
  branchAngleFolder
    .add(tree.params.branch.angle, '1', 0, 360, 1)
    .name('Level 1');
  branchAngleFolder
    .add(tree.params.branch.angle, '2', 0, 360, 1)
    .name('Level 2');
  branchAngleFolder
    .add(tree.params.branch.angle, '3', 0, 360, 1)
    .name('Level 3');

  const childrenFolder = branchFolder.addFolder('Children').close();
  childrenFolder
    .add(tree.params.branch.children, '0', 0, 100, 1)
    .name('Trunk');
  childrenFolder
    .add(tree.params.branch.children, '1', 0, 10, 1)
    .name('Level 1');
  childrenFolder
    .add(tree.params.branch.children, '2', 0, 5, 1)
    .name('Level 2');

  const gnarlinessFolder = branchFolder.addFolder('Gnarliness').close();
  gnarlinessFolder
    .add(tree.params.branch.gnarliness, '0', -0.5, 0.5, 0.01)
    .name('Trunk');
  gnarlinessFolder
    .add(tree.params.branch.gnarliness, '1', -0.5, 0.5, 0.01)
    .name('Level 1');
  gnarlinessFolder
    .add(tree.params.branch.gnarliness, '2', -0.5, 0.5, 0.01)
    .name('Level 2');
  gnarlinessFolder
    .add(tree.params.branch.gnarliness, '3', -0.5, 0.5, 0.01)
    .name('Level 3');

  const forceFolder = branchFolder.addFolder('Growth Direction').close();
  forceFolder.add(tree.params.branch.force.direction, 'x', -1, 1).name('X');
  forceFolder.add(tree.params.branch.force.direction, 'y', -1, 1).name('Y');
  forceFolder.add(tree.params.branch.force.direction, 'z', -1, 1).name('Z');
  forceFolder
    .add(tree.params.branch.force, 'strength', -0.1, 0.1)
    .name('Strength');

  const lengthFolder = branchFolder.addFolder('Length').close();
  lengthFolder
    .add(tree.params.branch.length, '0', 0.1, 50, 0.01)
    .name('Trunk');
  lengthFolder
    .add(tree.params.branch.length, '1', 0.1, 50, 0.01)
    .name('Level 1');
  lengthFolder
    .add(tree.params.branch.length, '2', 0.1, 50, 0.01)
    .name('Level 2');
  lengthFolder
    .add(tree.params.branch.length, '3', 0.1, 50, 0.01)
    .name('Level 3');

  const branchRadiusFolder = branchFolder.addFolder('Radius').close();
  branchRadiusFolder
    .add(tree.params.branch.radius, '0', 0.1, 2, 0.01)
    .name('Trunk');
  branchRadiusFolder
    .add(tree.params.branch.radius, '1', 0.1, 2, 0.01)
    .name('Level 1');
  branchRadiusFolder
    .add(tree.params.branch.radius, '2', 0.1, 2, 0.01)
    .name('Level 2');
  branchRadiusFolder
    .add(tree.params.branch.radius, '3', 0.1, 2, 0.01)
    .name('Level 3');

  const sectionsFolder = branchFolder.addFolder('Sections').close();
  sectionsFolder
    .add(tree.params.branch.sections, '0', 1, 20, 1)
    .name('Trunk');
  sectionsFolder
    .add(tree.params.branch.sections, '1', 1, 20, 1)
    .name('Level 1');
  sectionsFolder
    .add(tree.params.branch.sections, '2', 1, 20, 1)
    .name('Level 2');
  sectionsFolder
    .add(tree.params.branch.sections, '3', 1, 20, 1)
    .name('Level 3');

  const segmentsFolder = branchFolder.addFolder('Segments').close();
  segmentsFolder
    .add(tree.params.branch.segments, '0', 3, 16, 1)
    .name('Trunk');
  segmentsFolder
    .add(tree.params.branch.segments, '1', 3, 16, 1)
    .name('Level 1');
  segmentsFolder
    .add(tree.params.branch.segments, '2', 3, 16, 1)
    .name('Level 2');
  segmentsFolder
    .add(tree.params.branch.segments, '3', 3, 16, 1)
    .name('Level 3');

  const branchStartFolder = branchFolder.addFolder('Start').close();
  branchStartFolder
    .add(tree.params.branch.start, '1', 0, 1, 0.01)
    .name('Level 1');
  branchStartFolder
    .add(tree.params.branch.start, '2', 0, 1, 0.01)
    .name('Level 2');
  branchStartFolder
    .add(tree.params.branch.start, '3', 0, 1, 0.01)
    .name('Level 3');

  const taperFolder = branchFolder.addFolder('Taper').close();
  taperFolder
    .add(tree.params.branch.taper, '0', 0, 1, 0.01)
    .name('Trunk');
  taperFolder
    .add(tree.params.branch.taper, '1', 0, 1, 0.01)
    .name('Level 1');
  taperFolder
    .add(tree.params.branch.taper, '2', 0, 1, 0.01)
    .name('Level 2');
  taperFolder
    .add(tree.params.branch.taper, '3', 0, 1, 0.01)
    .name('Level 3');

  const twistFolder = branchFolder.addFolder('Twist').close();
  twistFolder
    .add(tree.params.branch.twist, '0', -0.5, 0.5, 0.01)
    .name('Trunk');
  twistFolder
    .add(tree.params.branch.twist, '1', -0.5, 0.5, 0.01)
    .name('Level 1');
  twistFolder
    .add(tree.params.branch.twist, '2', -0.5, 0.5, 0.01)
    .name('Level 2');
  twistFolder
    .add(tree.params.branch.twist, '3', -0.5, 0.5, 0.01)
    .name('Level 3');

  const leavesFolder = gui.addFolder('Leaves').close();
  leavesFolder.add(tree.params.leaves, 'type', LeafType).name('Type');
  leavesFolder.addColor(tree.params.leaves, 'tint').name('Tint');
  leavesFolder
    .add(tree.params.leaves, 'billboard', Billboard)
    .name('Billboard');
  leavesFolder.add(tree.params.leaves, 'angle', 0, 100, 1).name('Angle');
  leavesFolder.add(tree.params.leaves, 'count', 0, 100, 1).name('Count');
  leavesFolder.add(tree.params.leaves, 'start', 0, 1).name('Start');
  leavesFolder.add(tree.params.leaves, 'size', 0, 5).name('Size');
  leavesFolder
    .add(tree.params.leaves, 'sizeVariance', 0, 1)
    .name('Size Variance');

  leavesFolder.add(tree.params.leaves, 'alphaTest', 0, 1).name('AlphaTest');

  gui
    .add(
      {
        exportParams: () => {
          const link = document.getElementById('downloadLink');
          const json = JSON.stringify(tree.params, null, 2);
          const blob = new Blob([json], { type: 'application/json' });
          link.href = URL.createObjectURL(blob);
          link.download = 'tree.json';
          link.click();
        },
      },
      'exportParams',
    )
    .name('Save Parameters');

  gui
    .add(
      {
        loadParams: () => {
          document.getElementById('fileInput').click();
        },
      },
      'loadParams',
    )
    .name('Load Parameters');
  gui
    .add(
      {
        exportGlb: () =>
          exporter.parse(
            tree,
            (glb) => {
              const blob = new Blob([glb], {
                type: 'application/octet-stream',
              });
              const url = window.URL.createObjectURL(blob);
              const link = document.getElementById('downloadLink');
              link.href = url;
              link.download = 'tree.glb';
              link.click();
            },
            (err) => {
              console.error(err);
            },
            { binary: true },
          ),
      },
      'exportGlb',
    )
    .name('Export GLB');

  gui
    .add(
      {
        exportPng: () => {
          renderer.setClearColor(0x000000, 0); // Set background to transparent
          renderer.render(scene, camera);

          const link = document.getElementById('downloadLink');
          link.href = renderer.domElement.toDataURL('image/png');
          link.download = 'tree.png';
          link.click();

          renderer.setClearColor(0); // Restore original background color
        },
      },
      'exportPng',
    )
    .name('Export PNG');

  gui.onChange(() => {
    tree.generate();
    tree.traverse((o) => {
      if (o.material) {
        o.material.needsUpdate = true;
      }
    });

    const vertexCount =
      (tree.branches.verts.length + tree.leaves.verts.length) / 3;
    const triangleCount =
      (tree.branches.indices.length + tree.leaves.indices.length) / 3;
    document.getElementById('model-info').innerText =
      `Vertex Count: ${vertexCount} | Triangle Count: ${triangleCount}`;
  });
}
