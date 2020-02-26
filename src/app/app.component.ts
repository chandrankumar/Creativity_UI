import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModelService } from './model/model.service';
import { Model } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Student-Ui';
  message = 'Online Mobile Seller!';

  public mobiles = [];
  model: Model = new Model();

  constructor(private modelService: ModelService){}
  
    ngOnInit() {
    }

    getProducts(){
      console.log('calling get Products...');
      this.modelService.getProducts().subscribe((result) => {
        this.mobiles.length=0;
        console.log('get products...',result );
        result.map( model => this.mobiles.push(model));
      });
      console.log('After setting into map', this.mobiles);
      return this.mobiles; 
    }
}
