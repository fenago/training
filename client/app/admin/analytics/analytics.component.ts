import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((res: any) => {
      if (res.url === "/analytics") {
        console.log(res);
        this.initGA();
      }
    });
    gapi.analytics.ready(() => {

      // Step 3: Authorize the user.

      let CLIENT_ID = '309132701992-nb3o0gi5uc4dq8e5dcpaq7opif3di2cn.apps.googleusercontent.com';

      gapi.analytics.auth.authorize({
        container: 'auth-button',
        clientid: CLIENT_ID,
      });

      // Step 4: Create the view selector.

      let viewSelector = new gapi.analytics.ViewSelector({
        container: 'view-selector'
      });
      let viewSelector1 = new gapi.analytics.ViewSelector({
        container: 'view-selector-1-container'
      });
      let viewSelector2 = new gapi.analytics.ViewSelector({
        container: 'view-selector2'
      });
      let viewSelector3 = new gapi.analytics.ViewSelector({
        container: 'view-selector-2-container'
      });


      let timeline = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
          'dimensions': 'ga:date',
          'metrics': 'ga:sessions',
          'start-date': '30daysAgo',
          'end-date': 'yesterday',
        },
        chart: {
          type: 'LINE',
          container: 'timeline'
        }
      });
      let timeline2 = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
          'dimensions': 'ga:sessionCount',
          'metrics': 'ga:users',
          'start-date': '30daysAgo',
          'end-date': 'yesterday',
        },
        chart: {
          type: 'BAR',
          container: 'timeline2'
        }
      });
      // Render both view selectors to the page.
      let dataChart1 = new gapi.analytics.googleCharts.DataChart({
        query: {
          'metrics': 'ga:sessions',
          'dimensions': 'ga:country',
          'start-date': '30daysAgo',
          'end-date': 'yesterday',
          'max-results': 6,
          sort: '-ga:sessions'
        },
        chart: {
          container: 'chart-1-container',
          type: 'PIE',
          options: {
            width: '100%',
            pieHole: 4 / 9
          }
        }
      });

      let dataChart2 = new gapi.analytics.googleCharts.DataChart({
        query: {
          metrics: 'ga:users',
          dimensions: 'ga:userType',
          'start-date': '30daysAgo',
          'end-date': 'yesterday',
          'max-results': 6,
          sort: '-ga:users'
        },
        chart: {
          container: 'chart-2-container',
          type: 'PIE',
          options: {
            width: '100%',
            pieHole: 4 / 9
          }
        }
      });

      // Step 6: Hook up the components to work together.

      gapi.analytics.auth.on('success', function (response) {
        viewSelector.execute();
        viewSelector1.execute();
        viewSelector2.execute();
        viewSelector3.execute();
      });

      viewSelector.on('change', function (ids) {
        let newIds = {
          query: {
            ids: ids
          }
        }
        timeline.set(newIds).execute();
      });

      viewSelector2.on('change', function (ids) {
        let newIds = {
          query: {
            ids: ids
          }
        }
        timeline2.set(newIds).execute();
      });

      viewSelector1.on('change', function (ids) {
        dataChart1.set({ query: { ids: ids } }).execute();
      });
      viewSelector3.on('change', function (ids) {
        dataChart2.set({ query: { ids: ids } }).execute();
      });
    });
  }

  initGA() {

    // Step 3: Authorize the user.

    let CLIENT_ID = '309132701992-nb3o0gi5uc4dq8e5dcpaq7opif3di2cn.apps.googleusercontent.com';
    // Step 4: Create the view selector.

    let viewSelector = new gapi.analytics.ViewSelector({
      container: 'view-selector'
    });
    let viewSelector1 = new gapi.analytics.ViewSelector({
      container: 'view-selector-1-container'
    });
    let viewSelector2 = new gapi.analytics.ViewSelector({
      container: 'view-selector2'
    });
    let viewSelector3 = new gapi.analytics.ViewSelector({
      container: 'view-selector-2-container'
    });


    let timeline = new gapi.analytics.googleCharts.DataChart({
      reportType: 'ga',
      query: {
        'dimensions': 'ga:date',
        'metrics': 'ga:sessions',
        'start-date': '30daysAgo',
        'end-date': 'yesterday',
      },
      chart: {
        type: 'LINE',
        container: 'timeline'
      }
    });

    let timeline2 = new gapi.analytics.googleCharts.DataChart({
      reportType: 'ga',
      query: {
        'dimensions': 'ga:sessionDurationBucket',
        'metrics': 'ga:sessions',
        'start-date': '30daysAgo',
        'end-date': 'yesterday',
      },
      chart: {
        type: 'LINE',
        container: 'timeline2'
      }
    });

    // Render both view selectors to the page.
    let dataChart1 = new gapi.analytics.googleCharts.DataChart({
      query: {
        metrics: 'ga:sessions',
        dimensions: 'ga:country',
        'start-date': '30daysAgo',
        'end-date': 'yesterday',
        'max-results': 6,
        sort: '-ga:sessions'
      },
      chart: {
        container: 'chart-1-container',
        type: 'PIE',
        options: {
          width: '100%',
          pieHole: 4 / 9
        }
      }
    });

    let dataChart2 = new gapi.analytics.googleCharts.DataChart({
      query: {
        metrics: 'ga:users',
        dimensions: 'ga:userType',
        'start-date': '30daysAgo',
        'end-date': 'yesterday',
        'max-results': 6,
        sort: '-ga:users'
      },
      chart: {
        container: 'chart-2-container',
        type: 'PIE',
        options: {
          width: '100%',
          pieHole: 4 / 9
        }
      }
    });

    // Step 6: Hook up the components to work together.

    viewSelector.execute();
    viewSelector1.execute();
    viewSelector2.execute();
    viewSelector3.execute();

    viewSelector.on('change', function (ids) {
      let newIds = {
        query: {
          ids: ids
        }
      }
      timeline.set(newIds).execute();
    });
    viewSelector2.on('change', function (ids) {
      let newIds = {
        query: {
          ids: ids
        }
      }
      timeline2.set(newIds).execute();
    });
    viewSelector1.on('change', function (ids) {
      dataChart1.set({ query: { ids: ids } }).execute();
    });
    viewSelector3.on('change', function (ids) {
      dataChart2.set({ query: { ids: ids } }).execute();
    });
  }

}
