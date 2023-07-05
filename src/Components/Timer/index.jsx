import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Timer = ({ horaTimer, minutoTimer, segundosTimer }) => {
    const [time, setTime] = useState({
        hours: horaTimer || 0,
        minutes: minutoTimer || 0,
        seconds: segundosTimer || 10
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
    }, []);

    const formatTime = (time) => {
        const { hours, minutes, seconds } = time;

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    // Verifica se o tempo é menor que zero e retorna uma string vazia em vez de exibir valores negativos
    const displayTime = (time) => {
        if (time.hours < 0 || time.minutes < 0 || time.seconds < 0) {
            return '';
        }
        return formatTime(time);
    };

    return (
        <View>
            <Text style={styles.text2}>{displayTime(time)}</Text>
        </View>
    );
};

export default Timer;
