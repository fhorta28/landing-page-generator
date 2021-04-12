import React, { useState, useEffect } from 'react';

import { Modal, ModalContent, ModalHeader, Title, IconClose, ModalBody } from './style'
import Icon from '../Icon'

const ModalSidebar = props => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.open);
    }, [props.open]);

    const closeDialog = () => {
        setShow(false);
        props.callback()
    }

    return(
        <Modal open={show}>
            <ModalContent>
                <ModalHeader>
                    <Title>{ props.header }</Title>
                    <IconClose>
                    <Icon onClick={ closeDialog } icon="times" size="2x"/>
                  </IconClose>
                </ModalHeader>
                <ModalBody>
                    { props.body }
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalSidebar;
