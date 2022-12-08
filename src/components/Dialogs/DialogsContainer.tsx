import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { AppRootState } from '../../store/store';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import React from 'react';
import { addNewMessage } from '../../store/reducers/dialogsSlice';

type DialogsContainerType = {
  contactsData: Array<{ id: number; userName: string }>;
  messagesData: Array<{ id: number; message: string }>;
  addNewMessage: (newMessage: string) => void;
  isAuth: boolean | undefined;
};

const DialogsContainer: React.FC<DialogsContainerType> = (props) => {
  return (
    <Dialogs
      contactsData={props.contactsData}
      messagesData={props.messagesData}
      addNewMessage={props.addNewMessage}
      isAuth={props.isAuth}
    />
  );
};

const mapStateToProps = (state: AppRootState) => {
  return {
    contactsData: state.dialogs.contactsData,
    messagesData: state.dialogs.messagesData,
    isAuth: state.auth.isAuth,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { addNewMessage }),
  withAuthRedirect
)(DialogsContainer);
