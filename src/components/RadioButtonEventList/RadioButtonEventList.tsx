import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { SkeletonBox } from "../../components/SkeletonBox/SkeletonBox";

type RegisteredEvent = {
    registered_event_id: string;
    event_name: string;
    event_month_pt_br: string;
    event_year: string;
};

type RadioButtonEventListProps = {
    onSelectEvent: (option: RegisteredEvent) => void;
};

const RadioButtonEventList: React.FC<RadioButtonEventListProps> = ({ onSelectEvent }) => {
    const [radioOptionsList, setRadioOptionsList] = useState<RegisteredEvent[]>([]);
    const [loadingOptionsList, setLoadingOptionsList] = useState(true);
    const [selectedOption, setSelectedOption] = useState<string>("");

    // Simulando a chamada da API com um delay
    useEffect(() => {
        setTimeout(() => {
            const mockEvents: RegisteredEvent[] = [
                {
                    registered_event_id: "1",
                    event_name: "Evento 1",
                    event_month_pt_br: "Janeiro",
                    event_year: "2025",
                },
                {
                    registered_event_id: "2",
                    event_name: "Evento 2",
                    event_month_pt_br: "Fevereiro",
                    event_year: "2025",
                },
                {
                    registered_event_id: "3",
                    event_name: "Evento 3",
                    event_month_pt_br: "Março",
                    event_year: "2025",
                },
            ];

            setRadioOptionsList(mockEvents);
            setLoadingOptionsList(false);
        }, 2000); // Delay de 2 segundos para simular carregamento
    }, []);

    useEffect(() => {
        if (radioOptionsList.length > 0) {
            setSelectedOption(radioOptionsList[0].registered_event_id);
        }
    }, [radioOptionsList]);

    if (loadingOptionsList) {
        return (
            <S.RadioListContainer>
                {Array.from({ length: 5 }).map((_, index) => (
                    <S.RadioItem key={index}>
                        <SkeletonBox width="100%" />
                    </S.RadioItem>
                ))}
            </S.RadioListContainer>
        );
    }

    return (
        <S.RadioListContainer>
            {radioOptionsList.map((event) => (
                <S.RadioItem key={event.registered_event_id} checked={selectedOption === event.registered_event_id}>
                    <S.RadioInput
                        type="radio"
                        name="event"
                        value={event.registered_event_id}
                        checked={selectedOption === event.registered_event_id}
                        onChange={() => {
                            setSelectedOption(event.registered_event_id);
                            onSelectEvent(event);
                        }}
                    />
                    <S.RadioText>
                        <S.Title checked={selectedOption === event.registered_event_id}>
                            {event.event_name}
                        </S.Title>
                        <S.Details checked={selectedOption === event.registered_event_id}>
                            {event.event_month_pt_br} | {event.event_year}
                        </S.Details>
                    </S.RadioText>
                </S.RadioItem>
            ))}
        </S.RadioListContainer>
    );
};

export { RadioButtonEventList };
