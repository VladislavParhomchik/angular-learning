import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'my-object-list',
    templateUrl: './object-list.component.html',
    styleUrls: ['./object-list.component.scss']
})

export class MyobjectListComponent {

    constructor(private router: Router, private route: ActivatedRoute) {

    }

    public myObjects = myObjects

    public redirectTo(id: number): void {
        this.router.navigate([`${id}`], {relativeTo: this.route})
    }
}

export const myObjects: MyObjects[] = [
    {
        title: 'first',
        content: 'Lorem Ipsum ashjdkjhgsdkgfjhsdkhgsdjkfhgsdjhfgsjkdhf',
        id: 1
    },
    {
        title: 'second',
        content: 'Lorem Ipsum ashjdkjhgsdkgfjhsdkhgsdjkfhgsdjhfgsjkdhf',
        id: 2
    },
    {
        title: 'third',
        content: 'Lorem Ipsum ashjdkjhgsdkgfjhsdkhgsdjkfhgsdjhfgsjkdhf',
        id: 3
    },
    {
        title: 'fourth',
        content: 'Lorem Ipsum ashjdkjhgsdkgfjhsdkhgsdjkfhgsdjhfgsjkdhf',
        id: 4
    },
    {
        title: 'fifth',
        content: 'Lorem Ipsum ashjdkjhgsdkgfjhsdkhgsdjkfhgsdjhfgsjkdhf',
        id: 5
    }
]

export interface MyObjects {
    title: string;
    content: string;
    id: number;
}