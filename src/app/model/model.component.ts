import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Model } from './model';
import { ModelService } from './model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})

export class ModelComponent implements OnInit {


  addProduct: FormGroup;
  model: Model = new Model();

  @Input() brands =[];
  
  constructor(private modelService: ModelService){}

    ngOnInit(): void {
      
      this.addProduct = new FormGroup({
        brandName: new FormControl(''),
        mobileModel: new FormControl(''),
        cost: new FormControl(''),
        purchaseDate: new FormControl('')
      });
  }

  onSubmit() {
    console.log('Your form data : ', this.addProduct.value );
    this.model =<Model> this.addProduct.value;
    this.modelService.addProduct(this.model).subscribe((result)=>{
      console.log('save product....');
    }); 
    this.addProduct.reset();
  }
 
}
