import React, { useState, useEffect } from 'react'

import { generate } from 'shortid'
import _ from 'lodash'
import { useTheme } from '../../themeUtils/useTheme'
import { Container, Btn, Section, Row, Preview, ContainerBtn } from './style'
import Button from '../Button'


const CreateThemeContent = props => {

    const defaultTheme = {
        themeName: "",
        bgColorPrimary: "rgb(255, 255, 255)",
        txtColorPrimary: "#000000",
        bgColorSecondary: "rgb(66, 63, 121)",
        txtColorSecondary: "#FFFFFF",
        SubTxtColorSecondary: "rgba(255, 255, 255, 0.7)",
        btnBgColorPrimary: "rgb(70, 165, 159)",
        textColorBtnP: "rgb(255, 255, 255)",
        textColorBtnS: "#000000",
        labelColor: "rgba(255, 255, 255, 0.7)",
        iconColor: "rgb(255, 255, 255)",
        linkColor: "white",
        font: "Asap",
        fontTitle: "Crimson Text"
    }

    const { getFonts, getFontsTitle } = useTheme()
    const [state, setState] = useState(defaultTheme)
    
    const [newTheme, setNewTheme] = useState({})

    const getThemeObj = () => {
        const themeObj = {};
        themeObj[_.camelCase(state.themeName)] = {
            "id": generate(),
            "name": state.themeName,
            "colors": {
                "primary": {
                    "background": state.bgColorPrimary,
                    "color": state.txtColorPrimary,
                    "backgroundBtn": state.btnBgColorPrimary,
                    "txtColorBtnP": state.btnTxtColorP
                },
                "secondary":{
                    "background": state.bgColorSecondary,
                    "color": state.txtColorSecondary,
                    "colorSubtitle": state.SubTxtColorSecondary,
                    "textColorBtnS": state.btnTxtColorS
                },
                "form": {
                    "label": state.labelColor
                }  
            },
            "icon": {
                "color": state.iconColor
            },
            "link": {
                "color": state.linkColor,
                "opacity": 1
            },
            "font": state.font,
            "fontTitle": state.fontTitle
        };
        return themeObj;
    }

    useEffect(() => {
        const updated = getThemeObj();
        setNewTheme({...updated});
    }, [state]);

    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const createTheme = e => {
        e.preventDefault();
        setState({...defaultTheme});
        props.create(newTheme);
    }
    
    return(
    
        <Container>
        <Btn> 
          <button
            onClick={ createTheme }
            disabled={ state.themeName.trim().length === 0 }>
            Let's Create
          </button>
        </Btn>
            <Section>
                <Row>
                    <label htmlFor="th_name">Theme Name:</label> {' '}
                    <input 
                        type="text" 
                        id="themeName" 
                        name="themeName" 
                        value={ state.themeName }
                        placeholder="Specify a name" 
                        onChange={ handleChange }/>
                </Row>
                <Row>
                    <label htmlFor="bg_color_primary">Background Color Primary:</label> {' '}
                    <input type="color" id="bg_color_primary" name="bgColorPrimary" value= { state.bgColorPrimary } onChange={ handleChange }/>
                </Row>
                <Row>
                    <label htmlFor="txt_color_primary">Text Color Primary:</label> {' '}
                    <input type="color" id="txt_color_primary" name="txtColorPrimary" value={ state.txtColorPrimary } onChange={ handleChange }/>
                </Row>
                <Row>
                    <label htmlFor="bg_color_secondary">Background Color Secondary:</label> {' '}
                    <input type="color" id="bg_color_secondary" name="bgColorSecondary" value= { state.bgColorSecondary } onChange={ handleChange }/>
                </Row>
                <Row>
                    <label htmlFor="txt_color_secondary">Text Color Secondary:</label> {' '}
                    <input type="color" id="txt_color_secondary" name="txtColorSecondary" value={ state.txtColorSeconday } onChange={ handleChange }/>
                </Row>
                <Row>
                    <label htmlFor="btn_bg_color_primary">Button Background Color:</label> {' '}
                    <input type="color" id="btn_bg_color_primary" name="btnBgColorPrimary" value={ state.btnBgColorPrimary } onChange={ handleChange }/>
                </Row>
                <Row>
                    <label htmlFor="text_color_btn_p">Button Text Color</label> {' '}
                    <input type="color" id="text_color_btn_p" name="textColorBtnP" value={ state.btnTxtColorP } onChange={ handleChange }/>
                </Row>
                <Row>
                    <label htmlFor="text_color_btn_s">Button Text Color Secondary:</label> {' '}
                    <input type="color" id="text_color_btn_s" name="textColorBtnS" value={ state.btnTxtColorS } onChange={ handleChange }/>
                </Row>
                <Row>
                    <label htmlFor="link_color">Link Color:</label> {' '}
                    <input type="color" id="link_color" name="linkColor" value={ state.linkColor } onChange={ handleChange }/>
                </Row>
                <Row>
                    <label htmlFor="font">Select a Font:</label> {' '}
                    <select name="font" id="font" onChange={ handleChange } value={state.font}>
                        {getFonts().map((font, index) =>
                            <option value={ font } key={ index }>{ font }</option>
                        )}
                    </select>
                </Row>
                <Row>
                    <label htmlFor="font_title">Select a Font Title:</label> {' '}
                    <select name="fontTitle" id="font_title" onChange={ handleChange } value={state.font}>
                        {getFontsTitle().map((fontTitle, index) =>
                            <option value={ fontTitle } key={ index }>{ fontTitle }</option>
                        )}
                    </select>
                </Row>
            </Section>

            <Section>
                <span><b>Preview</b></span>
                <Preview style={{backgroundColor: state.bgColorPrimary, color: state.txtColorPrimary, fontFamily: state.font}}>
                    <p style={{padding:"5px"}}>
                      This is for preview only. Pick the color and font from the 
                      top side to see it working.
                    </p>
                    <ContainerBtn>
                      <Button 
                        style={{backgroundColor:state.btnBgColorPrimary, color:state.textColorBtnP, fontFamily: state.font}}
                        content="Button Primary"
                      />
                    </ContainerBtn>
                    <div style={{ padding:"10px",width:"100%",backgroundColor: state.bgColorSecondary, color: state.txtColorSecondary}}>
                        <h2 style={{ fontFamily: state.fontTitle}}>Title</h2>
                        <p style={{ fontFamily: state.font }}>
                          This is for preview only. Pick the color and font from the 
                          top side to see it working.
                        </p>
                        <Button 
                          style={{backgroundColor:state.bgColorPrimary, color:state.textColorBtnS, fontFamily: state.font}}
                          content="Button Secondary"
                         />
                        {' '}
                        <a href="#" style={{color:state.linkColor, fontFamily: state.font}}>I am Link</a>
                    </div>
                   
                </Preview>
            </Section>
        </Container>
    
    )
}

export default CreateThemeContent
