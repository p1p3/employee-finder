import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';


export class Animations {
    public static NetflixAnimation(durationInMs: number, tileWidthInPixels: number, growFactor: number) {
        let cssDuration = `${durationInMs}ms`;
        let cssTileWidth = `${tileWidthInPixels}px`;

        let moveLeft = -(tileWidthInPixels * (growFactor - 1) / 2);
        let moveRight = tileWidthInPixels * (growFactor - 1);
        return [
            trigger('cardState', [
                state('inactive', style(
                    { transform: `translate3d(0,0,0)` }
                )),
                state('active', style(
                    { transform: `translate3d(${moveLeft},0,0)` }
                )),
                state('side', style(
                    { transform: `translate3d(${moveLeft},0,0)` }
                )),

                transition('inactive => active', animate('100ms ease-in')),
                transition('active => inactive', animate('100ms ease-out')),
                transition('inactive => side', animate('100ms ease-in'))
            ])];
    }
}

state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
    ]),
    transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
    ])
