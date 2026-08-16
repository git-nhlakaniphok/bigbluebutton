import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectWbResizeEvent from '/imports/ui/components/presentation/resize-wrapper/component';
import Styled from './styles';
import CustomLogo from './custom-logo/component';
import UserContentContainer from './user-list-content/container';

const propTypes = {
  compact: PropTypes.bool,
  CustomLogoUrl: PropTypes.string,
  CustomDarkLogoUrl: PropTypes.string,
  DarkModeIsEnabled: PropTypes.bool,
  showBranding: PropTypes.bool.isRequired,
};

const defaultProps = {
  compact: false,
  CustomLogoUrl: null,
  CustomDarkLogoUrl: null,
};

class UserList extends PureComponent {
  render() {
    const {
      compact,
      CustomLogoUrl,
      CustomDarkLogoUrl,
      DarkModeIsEnabled,
      showBranding,
    } = this.props;
    const defaultLogo = (typeof window !== 'undefined' && window.meetingClientSettings?.public?.app?.basename)
      ? `${window.meetingClientSettings.public.app.basename}/images/netademix-logo.svg`
      : 'images/netademix-logo.svg';
    const logoUrl = (DarkModeIsEnabled ? CustomDarkLogoUrl : CustomLogoUrl) || defaultLogo;

    return (
      <Styled.UserList data-test="userListContainer">
        {
          showBranding
            && !compact
            ? <CustomLogo CustomLogoUrl={logoUrl} /> : null
        }
        <UserContentContainer compact={compact} />
      </Styled.UserList>
    );
  }
}

UserList.propTypes = propTypes;
UserList.defaultProps = defaultProps;

export default injectWbResizeEvent(UserList);
