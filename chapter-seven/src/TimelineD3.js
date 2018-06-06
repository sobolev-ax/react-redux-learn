import React, { Component } from 'react'
import * as d3 from "d3";

class TimelineD3 extends Component {
    constructor(props) {
        super(props)
        const times = d3.extent(this.props.data.map(d => d.year))
        const range = [50, 450]
        this.state = {
            data: this.props.data,
            times,
            range
        }
    }

    componentDidMount() {
        let group
        const { data, times, range } = this.state
        const { target } = this.refs
        const scale = d3.scaleTime().domain(times).range(range)

        d3.select(target)
            .append('svg')
            .attr('height', 200)
            .attr('width', 500)

        group = d3.select(target.children[0])
            .selectAll('g')
            .data(data)
            .enter()
            .append('g')
            .attr(
                'transform',
                (d, i) => 'translate(' + scale(d.year) + ', 0)'
            )

        group.append('circle')
            .attr('cy', 160)
            .attr('r', 5)
            .style('fill', 'blue')

        group.append('text')
            .text(d => d.year + ' - ' + d.event)
            .style('font-size', 10)
            .attr('y', 155)
            .attr('x', -95)
            .attr('transform', 'rotate(-45)')
    }

    render() {
        return (
            <section>
                <h4>{this.props.name} Timeline</h4>
                <div ref="target"></div>
            </section>
        )
    }
}

export default TimelineD3
