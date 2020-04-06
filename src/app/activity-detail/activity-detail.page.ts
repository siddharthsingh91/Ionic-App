import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Activity } from '../types';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
  activityDetail: Observable<Activity>;

  constructor(
    activityService : ActivityService, 
    ativatedRoute : ActivatedRoute
    ) {
    const activityID = ativatedRoute.snapshot.params["activityID"];
    this.activityDetail = activityService.getActivity(activityID);
    //console.log(this.activityDetail.(activityID))
   }

  ngOnInit() {
  }

}
