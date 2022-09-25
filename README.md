# MMM-CountDown
![Screenshot_1](https://github.com/eknee/MMM-CountDown/raw/master/Screenshot_1.png)

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) which can count down the days to a date/event.

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:

```js
var config = {
    modules: [
        {
            module: 'MMM-CountDown',
            config: {
                // See configuration options
            }
        }
    ]
}
```

### Example Config
```js
var config = {
    modules: [
        {
            module: 'MMM-CountDown',
            position: 'top_center',
            config: {
                events: [
                    {
                        title: "Christmas Day",
                        date: "2022-12-25 23:59:59"
                    },
                    {
                        title: "New Years Eve",
                        date: "2022-12-31 23:59:59"
                    }
                ]
            }
        }
    ]
}
```

## Configuration options

| Option           | Description                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| `events`         | An array of hashes of {title: "Event Title", date: "YYYY-MM-DD HH:MM:SS+00:00"} to display.                           |
|                  | Only the next upcoming event wil be displayed and will automatically progress to the next one when the date passes.   |
| `date`           | *Required* Date to count down to (YYYY-MM-DD HH:MM:SS+00:00)                                                          |
| `showHours`      | Decide whether or not to display the hours. Default is true                                                           |
| `showMinutes`    | Decide whether or not to display the minutes. Default is true                                                         |
| `showSeconds`    | Decide whether or not to display the seconds. Default is true                                                         |
| `customInterval` | Change the update interval which will help reduce load if you are only showing specific time metrics. Default is 1000 |
| `daysLabel`      | Choose how you wish to display your Days label. Default is Days                                                       |
| `hoursLabel`     | Choose how you wish to display your Hours label. Default is Hours                                                     |
| `minutesLabel`   | Choose how you wish to display your Minutes label. Default is Minutes                                                 |
| `secondsLabel`   | Choose how you wish to display your Seconds label. Default is Seconds                                                 |

If either of the above are missing, the module will count down to the New Millenium (3000-01-01)
