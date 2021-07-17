import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LotteryService } from '@services/lottery/lottery.service';

@Component({
  selector: 'sk-home',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  showError: boolean = false;
  isLoading: boolean = true;

  constructor(private router: Router, private lotteryService: LotteryService) {}

  onJoinLottery(lotteryCode: string): void {
    this.showError = false;
    this.isLoading = true;
    this.lotteryService.lotteryExists(lotteryCode).subscribe(
      exists => {
        if (exists) {
          this.router.navigate(['lottery', lotteryCode]);
        } else {
          this.showError = true;
        }
        this.isLoading = false;
      },
      () => {
        console.error('something went wrong grabbing lottery by id');
      },
    );
  }
}
