import React from "react"
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts"
import DataSet from "@antv/data-set"

export default class Line extends React.Component {
  render() {
    const data = [
      {
        month: "Jan",
        2016: 7.0,
        2017: 4.9,
        2018: 5.9
      },
      {
        month: "Feb",
        2016: 6.9,
        2017: 5.2,
        2018: 4.9
      },
      {
        month: "Mar",
        2016: 9.5,
        2017: 7.7,
        2018: 5.9
      },
      {
        month: "Apr",
        2016: 14.5,
        2017: 8.5,
        2018: 5.5
      },
      {
        month: "May",
        2016: 18.4,
        2017: 11.9,
        2018: 4.9
      },
      {
        month: "Jun",
        2016: 21.5,
        2017: 15.2,
        2018: 10.0
      },
      {
        month: "Jul",
        2016: 25.2,
        2017: 17.0,
        2018: 12.9
      },
      {
        month: "Aug",
        2016: 26.5,
        2017: 16.6,
        2018: 15.9
      },
      {
        month: "Sep",
        2016: 23.3,
        2017: 14.2,
        2018: 20.7
      },
      {
        month: "Oct",
        2016: 18.3,
        2017: 10.3,
        2018: 25.9
      },
      {
        month: "Nov",
        2016: 13.9,
        2017: 6.6,
        2018: 30.9
      },
      {
        month: "Dec",
        2016: 9.6,
        2017: 4.8,
        2018: 32.9
      }
    ]
    const ds = new DataSet()
    const dv = ds.createView().source(data)
    dv.transform({
      type: "fold",
      fields: ["2016", "2017", "2018"],
      // 展开字段集
      key: "city",
      // key字段
      value: "temperature" // value字段
    })
    const cols = {
      month: {
        range: [0, 1]
      }
    }
    return (
      <div style={{float: 'left', width: 750,marginTop: 40}}>
        <Chart height={250} data={dv} scale={cols} forceFit>
          <Legend/>
          <Axis name="month"/>
          <Axis
            name="temperature"
            label={{
              formatter: val => `${val}个`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="month*temperature"
            size={2}
            color={"city"}
            shape={"smooth"}
          />
          <Geom
            type="point"
            position="month*temperature"
            size={4}
            shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    )
  }
}
