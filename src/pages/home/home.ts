import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddMsgPage } from "../add-msg/add-msg";
import { UserPage } from "../user/user";
import { AnswerQuestionPage } from "../answer-question/answer-question";
import { Moment } from "../../model/moment";
import { HomeService } from "./home.service";
import { MsgContentPage } from "../msg-content/msg-content";
//import { AnswerQuestionPage } from "../answer-question/answer-question";

@IonicPage({
  name: 'home',
  segment: 'homepage'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  //moments: Moment[];
  private moment: Moment = new Moment();
  private coolingmoment: Moment = new Moment();

  time: any;
  timetxt: string;
  m: number;
  s: number;

  public moments = [

    {
      content: "I watched a perfect movie with YOU!",
      date: new Date(2017, 7, 4, 10, 12, 34),
      author: "Rose",
      question: "What's my favourite fruit?",
      optionA: "Apple",
      optionB: "Banana",
      optionC: "Cherry",
      answer: "answerB",
      icon: "md-done-all",
      cooling: false,
    },
    {
      content: "You cooked dinner very well and suprised me!",
      date: new Date(2017, 7, 1, 13, 2, 56),
      author: "Rose",
      question: "What's my favourite color?",
      optionA: "Red",
      optionB: "Blue",
      optionC: "Pink",
      answer: "answerC",
      icon: "md-help",
      cooling: false,
    },
    {
      content: "Tell you a secret. I fed your cat a piece of chocolate.",
      date: new Date(2017, 6, 23, 13, 4, 42),
      author: "Rose",
      question: "What's my favourite movie?",
      optionA: "<Dunkirk>",
      optionB: "<Land of Mine>",
      optionC: "<Nelly>",
      answer: "answerA",
      icon: "md-help",
      cooling: false,
    },
    {
      content: "You cooked dinner very well and suprised me!",
      date: new Date(2017, 6, 21, 13, 12, 52),
      author: "Jack",
      question: "What's my favourite animal?",
      optionA: "Elephant",
      optionB: "Cat",
      optionC: "Dog",
      answer: "answerC",
      icon: "md-done-all",
      cooling: false,
    }

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public HomeService: HomeService) {

    this.moment = navParams.get('moment');
    this.coolingmoment = navParams.get('thatmoment');

    for (var i = 0; i < this.moments.length; i++) {
      if (this.coolingmoment && (this.moments[i].question == this.coolingmoment.question)) {
        this.moments[i].cooling = true;
        console.log(this.moments[i]);
      }
    }

  }

  toUserPage() {
    this.navCtrl.push(UserPage);
  }

  ionViewDidLoad() {

    if (this.moment) {
      this.moments.unshift(this.moment);
    }

    console.log('ionViewDidLoad HomePage');

    this.timetxt = "15:00";
    this.time = setTimeout(() => {
      this.start();
    }, 1000);
  }

  answerQuestion(a) {
    this.navCtrl.push(AnswerQuestionPage, {
      moment: this.moments[a],
    });
  }

  toContent(a) {
    this.navCtrl.push(MsgContentPage, {
      moment: this.moments[a],
    });
  }

  ngOnInit() {

  }

  start() {
    this.timetxt = "14:59";
    this.m = 14;
    this.s = 59;
    this.time = setInterval(() => {
      this.run();
    }, 1000)
  }

  run() {
    --this.s;
    if (this.s < 0) {
      --this.m;
      this.s = 59;
    }

    this.timetxt = this.addo(this.m) + ":" + this.addo(this.s);
  }

  addo(n) {
    if (n < 10) {
      return "0" + n;
    } else {
      return n;
    }
  }

}
