
import GoogleChart from 'ember-google-charts/components/google-chart';

export default GoogleChart.extend({

  defaultOptions: {
    backgroundColor: '#389fcc',
    annotations: {
      alwaysOutside: true,
    },
  },

});