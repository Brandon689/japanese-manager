import * as wanakana from 'wanakana';

export default function Wanakana() {

    const w: string = wanakana.toRomaji("安易にピースしないようくぎを刺さねば")

    return (
        <div>
            {w}
        </div>
    );
}