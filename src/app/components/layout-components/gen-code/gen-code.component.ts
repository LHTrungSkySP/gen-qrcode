import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'lht-gen-code',
  templateUrl: './gen-code.component.html',
  styleUrl: './gen-code.component.scss'
})
export class GenCodeComponent {
  showPrintScreen = false;

  numberStarGen: number = 1;
  numberEndGen: number = 5;

  code: string = '';
  listDataNeedGen: any[] = [];
  listCode: any[] = [];
  genCode() {
    let regexSplit = /\r?\n/;
    let listData = this.code.split(regexSplit).filter(en => en != '' && en != null && en != undefined);
    
    console.log(listData[0]);
    
    this.listDataNeedGen = listData.map(en => {
      return { data: en, isFocus: false };
    });

  }
  showAll() {
    this.onToggleViewCode(true);

  }
  hideAll() {
    this.onToggleViewCode(false);

  }
  showPrint(){
    this.showPrintScreen = true;

  }
  onToggleViewCode(show: boolean) {
    this.listDataNeedGen.forEach(en => {
      en.isFocus = show;
    })
  }
  focusOnCode(data: any) {
    this.onToggleViewCode(false);
    data.isFocus = true;
  }
  @HostListener('window:keydown.esc', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.showPrintScreen = false;
  }
  @HostListener('window:keydown.enter', ['$event'])
  handleEnter(event: KeyboardEvent) {
    if(this.showPrintScreen){
      this.showAll();
    }
  }
  dataNeedAutoGen: string = '';
  genAuto(){
    for(let idx = this.numberStarGen; idx <= this.numberEndGen; idx ++){
      let data = this.dataNeedAutoGen + idx.toString();
      this.code += data + '\n';
    }
    this.genCode()
  }

}
