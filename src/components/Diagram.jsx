import React, { Component, Fragment } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Statistics from "../components/Statistics";
import FeedbackOptions from "../components/FeedbackOptions";
import Section from "../components/Sections";
import styles from "../diagram.module.css";

class WidgetComponent extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = total === 0 ? 0 : (good / total) * 100;
    return percentage.toFixed(2);
  };

  handleButtonClick = (category) => {
    this.setState((prevState) => ({ [category]: prevState[category] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    const data = [
      { name: "GOOD", valor: good, fill: "green" },
      { name: "NEUTRAL", valor: neutral, fill: "yellow" },
      { name: "BAD", valor: bad, fill: "red" },
    ];

    return (
      <Fragment>
        <section>
            <p className={styles["author"]}>Jersson Stiven Aguirre Avila</p>
          <div className={styles["container"]}>
            <div className={styles["container-box"]}>
              <Section />

              <div className={styles["container-button"]}>
                <FeedbackOptions options={options} onLeaveFeedback={this.handleButtonClick} />
              </div>

              {this.countTotalFeedback() === 0 ? (
                <p className={styles["text-no-feedback"]}>There is no feedback</p>
              ) : (
                <Fragment>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px" }}>
                    <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="valor" fill="#coffe" />
                    </BarChart>
                  </div>

                  <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                  />
                </Fragment>
              )}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default WidgetComponent;