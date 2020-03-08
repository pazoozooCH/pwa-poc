import { MediaMatcher } from "@angular/cdk/layout";
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();

    if (this.mobileQuery.addEventListener) {
      this.mobileQuery.addEventListener("change", this.mobileQueryListener);
    } else {
      // Safari
      // tslint:disable-next-line: deprecation
      this.mobileQuery.addListener(this.mobileQueryListener);
    }
  }

  ngOnDestroy(): void {
    if (this.mobileQuery.addEventListener) {
      this.mobileQuery.removeEventListener("change", this.mobileQueryListener);
    } else {
      // Safari
      // tslint:disable-next-line: deprecation
      this.mobileQuery.removeListener(this.mobileQueryListener);
    }
  }
}
