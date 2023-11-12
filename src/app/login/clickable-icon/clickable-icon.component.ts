import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-clickable-icon-button',
    styles: [`
    .container {
        height: 350px;
        width: 250px;
        background-color: white;
        border-radius: 20px;
        display: grid;
        grid-template-rows: 1fr 0.5fr 1fr;
        text-align: center;
        color: #979797;
        padding: 10px 20px;
        //make animation on hover move up
        transition: transform 0.2s;
        &:hover {
            transform: translateY(-10px);
        }
    }
    .title {
        font-size: 24px;
        font-weight: bold;
    }
    mat-icon {
        filter: invert(0.7);
        margin-top: 20px;
        height: 128px;
        width: 128px;
    }
    `],
    template: `
    <div class="container">
        <div class="icon">
            <mat-icon [svgIcon]="this.icon">
            </mat-icon>
        </div>
        <div class="title">
            {{this.title}}
        </div>
        <div class="text">
            {{this.text}}
        </div>
    </div>
    `
})

export class ClickableIconComponent {
    @Input() icon: string = "No Icon";
    @Input() title: string = "No Title";
    @Input() text: string = "No Text";
    
    configuredIcon: string = this.icon;

    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,    
    ) {}

    ngOnInit() {
        console.log(this.icon);
        this.iconRegistry.addSvgIcon(
            `${this.icon}`,
            this.sanitizer.bypassSecurityTrustResourceUrl(
              `assets/svg/${this.icon}.svg`
            ));
    }
}