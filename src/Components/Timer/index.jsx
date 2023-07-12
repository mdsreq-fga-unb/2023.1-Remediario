import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Timer = ({ horaTimer, minutoTimer, segundosTimer }) => {


    useEffect(() => {
        const timeout = setTimeout(() => {
            setTime({
                hours: horaTimer || 0,
                minutes: minutoTimer || 0,
                seconds: segundosTimer || 10
            });
        }, 1000);

        return () => clearTimeout(timeout);
    }, [horaTimer, minutoTimer, segundosTimer]);


    const [time, setTime] = useState({
        hours: horaTimer || 0,
        minutes: minutoTimer || 0,
        seconds: segundosTimer || 0
    });

    useEffect(() => {
        let totalSeconds = (time.hours * 3600) + (time.minutes * 60) + time.seconds;

        const timer = setInterval(() => {
            totalSeconds--;

            if (totalSeconds <= 0) {
                clearInterval(timer);
                totalSeconds = 0;
            }

            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            setTime({ hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    const formatTime = (time) => {
        const { hours, minutes, seconds } = time;

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    const displayTime = (time) => {
        if (time.hours < 0 || time.minutes < 0 || time.seconds < 0) {
            return '';
        }
        return formatTime(time);
    };

    console.log(time);

    return (
        <View>
            <Text style={styles.text2}>{displayTime(time)}</Text>
        </View>
    );
};

export default Timer;
