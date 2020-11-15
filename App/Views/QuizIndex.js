import React from "react";
import { ScrollView, StatusBar } from "react-native";

import QIController from "../Controllers/QuizIndexController";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "vehicles",
          questions: QIController.getSpaceQuestions(),
          color: "#36b1f0",
        })
      }
    />
    <RowItem
      name="General Knowledge"
      color="#77BA99"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "General Knowledge",
          questions: QIController.getGeneralQuestions(),
          color: "#77BA99",
        })
      }
    />
    <RowItem
      name="Computers"
      color="#D7C0D0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: QIController.getComputerQuestions(),
          color: "#D7C0D0",
        })
      }
    />
    <RowItem
      name="Vehicles"
      color="#360568"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Vehicles",
          questions: QIController.getVehiclesQuestions(),
          color: "#360568",
        })
      }
    />
  </ScrollView>
);
