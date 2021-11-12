import React, { Component } from "react";
import PropTypes from "prop-types";
import ExecutionEnvironment from "exenv";

export default class InstagramEmbed extends Component {
  static propTypes = {
    /**
     * Tweet id that needs to be shown
     */
    script: PropTypes.string.isRequired,
    /**
     * Additional options to pass to twitter widget plugin
     */
    options: PropTypes.object,
    /**
     * Placeholder while tweet is loading
     */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Function to execute after load, return html element
     */
    onLoad: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.ig = React.createRef();
  }

  renderWidget() {
    const { onLoad } = this.props;
    //this.refs.embedContainer
    this.ig.current.innerHTML = this.props.script;
    this.setState({
      isLoading: false
    });
    if (onLoad) {
      onLoad();
    }
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      console.log("canusedom");
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      script.onload = () => {
        console.log("ready ig");
        this.renderWidget();
      };
      document.body.appendChild(script);
    }
  }

  componentWillUnmount() {
    this.isMountCanceled = true;
  }

  render() {
    return <div ref={this.ig} />;
  }
}
