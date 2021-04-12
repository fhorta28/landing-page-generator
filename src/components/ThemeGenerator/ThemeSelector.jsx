import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import { useTheme } from '../../themeUtils/useTheme';
import { getFromLS } from '../../storage';

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    width: 60%;
    cursor: pointer;
`;

const Wrapper = styled.li`
    padding: 10px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #000;
    list-style: none;
    background-color: white;
`;

const Container = styled.ul`
   display:flex;
   flex-direction:column;
   justify-content: center;
   padding: 0px;
    
`;

const HeaderPreview = styled.h2`
    with: 100%;
    text-align: center;
`;

export default (props) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
            updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = {...data, [key]:theme[key]};
        setData(updated);
    }

    const ThemeCard = props => {
        return(
            <Wrapper style = {{backgroundColor: `${props => props.theme.colors.primary.background}`}}> 
                  
                <span>Click on the button to set this theme</span>
                <ThemedButton onClick={ (theme) => themeSwitcher(props.theme) }>
                   
                    {props.theme.name}
                </ThemedButton>
            </Wrapper>
        )
    }

    return (
        <div>
            <HeaderPreview>Select a Theme from below</HeaderPreview>
            <Container>
            {
                themes.length > 0 && 
                    themes.map(theme =>(
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
            }
            </Container>
        </div>
    )
}

