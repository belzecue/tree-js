import * as THREE_2 from 'three';

export declare namespace Billboard {
    let Single: string;
    let Double: string;
}

declare class Branch {
    /**
     * Generates a new branch
     * @param {THREE.Vector3} origin The starting point of the branch
     * @param {THREE.Euler} orientation The starting orientation of the branch
     * @param {number} length The length of the branch
     * @param {number} radius The radius of the branch at its starting point
     */
    constructor(origin?: THREE_2.Vector3, orientation?: THREE_2.Euler, length?: number, radius?: number, level?: number, sectionCount?: number, segmentCount?: number);
    origin: THREE_2.Vector3;
    orientation: THREE_2.Euler;
    length: number;
    radius: number;
    level: number;
    sectionCount: number;
    segmentCount: number;
}

export declare namespace LeafType {
    let Ash: string;
    let Aspen: string;
    let Beech: string;
    let Evergreen: string;
    let Oak: string;
}

declare class RNG {
    constructor(seed: any);
    m_w: number;
    m_z: number;
    mask: number;
    /**
     * Returns a random number between min and max
     */
    random(max?: number, min?: number): number;
}

export declare class Tree extends THREE_2.Group {
    /**
     * @param {TreeParams} params
     */
    constructor(params?: {
        seed: number;
        type: string;
        tint: number;
        flatShading: boolean;
        textured: boolean;
        levels: number;
        branch: {
            angle: {
                1: number;
                2: number;
                3: number;
            };
            children: {
                0: number;
                1: number;
                2: number;
            };
            force: {
                direction: {
                    x: number;
                    y: number;
                    z: number;
                };
                strength: number;
            };
            gnarliness: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            length: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            radius: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            sections: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            segments: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            start: {
                1: number;
                2: number;
                3: number;
            };
            taper: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            twist: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
        };
        leaves: {
            type: string;
            billboard: string;
            angle: number;
            count: number;
            start: number;
            size: number;
            sizeVariance: number;
            tint: number;
            alphaTest: number;
        };
    });
    /**
     * @type {RNG}
     */
    rng: RNG;
    /**
     * @type {TreeParams}
     */
    params: {
        seed: number;
        type: string;
        tint: number;
        flatShading: boolean;
        textured: boolean;
        levels: number;
        branch: {
            angle: {
                1: number;
                2: number;
                3: number;
            };
            children: {
                0: number;
                1: number;
                2: number;
            };
            force: {
                direction: {
                    x: number;
                    y: number;
                    z: number;
                };
                strength: number;
            };
            gnarliness: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            length: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            radius: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            sections: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            segments: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            start: {
                1: number;
                2: number;
                3: number;
            };
            taper: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            twist: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
        };
        leaves: {
            type: string;
            billboard: string;
            angle: number;
            count: number;
            start: number;
            size: number;
            sizeVariance: number;
            tint: number;
            alphaTest: number;
        };
    };
    /**
     * @type {Branch[]}
     */
    branchQueue: Branch[];
    branchesMesh: THREE_2.Mesh<THREE_2.BufferGeometry<THREE_2.NormalBufferAttributes>, THREE_2.Material | THREE_2.Material[]>;
    leavesMesh: THREE_2.Mesh<THREE_2.BufferGeometry<THREE_2.NormalBufferAttributes>, THREE_2.Material | THREE_2.Material[]>;
    /**
     * Generate a new tree
     */
    generate(): void;
    branches: {
        verts: any[];
        normals: any[];
        indices: any[];
        uvs: any[];
    };
    leaves: {
        verts: any[];
        normals: any[];
        indices: any[];
        uvs: any[];
    };
    #private;
}

export declare namespace TreeType {
    let Deciduous: string;
    let Evergreen_1: string;
        { Evergreen_1 as Evergreen };
}

export { }

export namespace TreeParams {
    let seed: number;
    let type: string;
    let tint: number;
    let flatShading: boolean;
    let textured: boolean;
    let levels: number;
    namespace branch {
        let angle: {
            1: number;
            2: number;
            3: number;
        };
        let children: {
            0: number;
            1: number;
            2: number;
        };
        namespace force {
            namespace direction {
                let x: number;
                let y: number;
                let z: number;
            }
            let strength: number;
        }
        let gnarliness: {
            0: number;
            1: number;
            2: number;
            3: number;
        };
        let length: {
            0: number;
            1: number;
            2: number;
            3: number;
        };
        let radius: {
            0: number;
            1: number;
            2: number;
            3: number;
        };
        let sections: {
            0: number;
            1: number;
            2: number;
            3: number;
        };
        let segments: {
            0: number;
            1: number;
            2: number;
            3: number;
        };
        let start: {
            1: number;
            2: number;
            3: number;
        };
        let taper: {
            0: number;
            1: number;
            2: number;
            3: number;
        };
        let twist: {
            0: number;
            1: number;
            2: number;
            3: number;
        };
    }
    namespace leaves {
        let type_1: string;
        export { type_1 as type };
        export let billboard: string;
        let angle_1: number;
        export { angle_1 as angle };
        export let count: number;
        let start_1: number;
        export { start_1 as start };
        export let size: number;
        export let sizeVariance: number;
        let tint_1: number;
        export { tint_1 as tint };
        export let alphaTest: number;
    }
}

export namespace Billboard {
    let Single: string;
    let Double: string;
}


export namespace LeafType {
    let Ash: string;
    let Aspen: string;
    let Beech: string;
    let Evergreen: string;
    let Oak: string;
}

