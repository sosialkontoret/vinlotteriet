import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LotteryService } from '@services/lottery/lottery.service';

@Component({
  selector: 'sk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pin: string;
  showError: boolean;
  isLoading: boolean;

  constructor(private router: Router, private lotteryService: LotteryService) {}

  ngOnInit() {
  }

  onJoinLottery($event: string) {
    this.showError = false;
    if (this.pin) {
      this.isLoading = true;
      this.lotteryService.getLottery(this.pin).subscribe(
        lottery => {
          if (lottery) {
            this.router.navigate(['lottery', this.pin]);
            this.isLoading = false;
          } else {
            this.showError = true;
            this.isLoading = false;
          }
        },
        () => {
          console.error('something went wrong grabbing lottery by id');
        },
      );
    } else {
      this.showError = true;
    }

  }
}
