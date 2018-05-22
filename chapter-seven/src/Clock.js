import React, { Component } from 'react'

class Clock extends Component {
    constructor() {
        super()

        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        console.log('Starting Clock')
        
        this.ticking = setInterval(() =>
            this.setState({
                time: new Date()
            })
            , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.ticking)
        console.log('Stopping Clock')
    }

    render() {
        const { time } = this.state

        let t = {
            h: time.getHours(),
            m: time.getMinutes(),
            s: time.getSeconds(),
            year: time.getFullYear(),
            month: time.getMonth(),
            day: time.getDate()
        }

        Object.keys(t).map((value) =>
            t[value] = t[value] > 9 ? `${t[value]}` : `0${t[value]}`
        )

        return (
            <time 
                dateTime={`${t.year}-${t.month}-${t.day}T${t.h}:${t.m}+03:00`}
                title={`Now is ${t.h}:${t.m}`}>
                {t.year}:{t.month}:{t.day} {t.h}:{t.m}:{t.s}
            </time>
        )
    }
}

export default Clock
