### Vue Calendar

This is a bare bones, flexible calendar currently in production for use in a campaign management software.

```
<calendar
    :events="events" 
    :month="dataMonth"
    ref="monthCal"/>

<script>
export default {
  data: () => ({
    events: [
      {
        name: 'Big Social Event!',
        start_date: '2019-03-06',
        color: 'blue',
        nodes: [
          {
            title:'Send out invitations',
            date: '2019-03-01',
            meta: {
                type: 'email'
            }
          }
        ]
      }
    ]
  }),
  methods: {
    /**
     * Increment the internal
     * date SoT with incrementing
     * method.
     */
    addMonth() {
      this.$refs.monthCal.addMonth();
    },
  }
}
</script>
```