import { Component } from '@angular/core';
import { CaptionItem } from './caption-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string | undefined;
  imgSrc = "./assets/pic/0*wuNf24urnMp7ypDp.png"
  // public messages = [
  //   'หนังที่ดีที่สุด ยกให้หนังไก่ย่าง',
  //   'วันนี้ไม่เห็นค่า วันหน้าคือพรุ่งนี้',
  //   'สมองไม่มี ปากดีนัมเบอร์วัน',
  //   'แจ้งเตือนอะไรไม่สู้แจ้งเตือนเงินเข้าบัญชี',
  //   'โกรธคือโง่ แมงโก้คือมะม่วง',
  //   'แคปชั่นไม่รู้ แต่แคปหมูไม่แน่',
  //   'เหงานิดหน่อย แต่กินข้าวอร่อยเหมือนเดิม',
  //   'นอกจากปากดี ก็ไม่มีอะไรดีแล้ว',
  //   'โตแล้วไม่คิดเรื่องหยุมหยิม หยุมหัวกันไปเลย',
  //   'เศร้าเป็นช่วงๆ แต่ง่วงเป็นประจำ'
  // ];

  //public usedMwssages: string[] = [];
  

  captionList: CaptionItem[] = [
    {
      id: 1,
      message: 'หนังที่ดีที่สุด ยกให้หนังไก่ย่าง',
      icon: './assets/pic/ic_funny_01.png'
    },
    {
      id: 2,
      message: 'วันนี้ไม่เห็นค่า วันหน้าคือพรุ่งนี้',
      icon: './assets/pic/ic_funny_02.png'
    },
    {
      id: 3,
      message: 'สมองไม่มี ปากดีนัมเบอร์วัน',
      icon: './assets/pic/ic_funny_03.png'
    }
  ];

  public usedCaptionList: CaptionItem[] = [];

  constructor() {
    this.title = this.randomCaption()?.message;
  }

  randomCaption(){
    let randomIndex: number;
    let newCaption: CaptionItem;

    if(this.captionList.length == this.usedCaptionList.length){
      return  null
    }

    do{
      randomIndex = this.getRandonInt(this.captionList.length)
      newCaption = this.captionList[randomIndex];
    }while (this.usedCaptionList.includes(newCaption))
    
    this.usedCaptionList.push(newCaption)
    // do{
    //   randomIndex = this.getRandonInt(this.messages.length)
    //   newCaption = this.messages[randomIndex];
    // }while (newCaption == this.title)
    
    return newCaption
  }

  handleClickButton(){
      this.title = this.randomCaption()?.message;
  }

  private getRandonInt(max: number){
    return Math.floor(Math.random() * max)
  }
}
