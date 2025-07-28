import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { slugifyCategory } from '@app/shared/utils/slugify';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-featured-categories',
  imports: [RouterModule, CommonModule],
  templateUrl: './featured-categories.html',
  styleUrl: './featured-categories.scss'
})
export class FeaturedCategories {
  slugifyCategory = slugifyCategory;

  featuredCategories =[
    {name:"women's clothing", image:"Subject 29.png"},
    {name:"men's clothing", image:"Subject 31.png"},
    {name:'jewelery', image:"Subject 47.png"},
    {name:'electronics', image:"Subject 48.png"},

  ]

}
