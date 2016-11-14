import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'immutable-data',
    template: `
        **EXPIREMENTAL USE OF IMMUTABLE.JS LIBRARY INSIDE A PRESENTATIONAL COMPONENT**
        <br>
        Name: {{data?.getIn([1,'name'])}} Email: {{data?.getIn([1,'email'])}} <br>
        Address: {{data?.getIn([1,'address', 'street'])}} {{data?.getIn([1,'address', 'city'])}} {{data?.getIn([1,'address', 'zipcode'])}}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ImmutableDataComponent {
    @Input() data;
    constructor() { }

}