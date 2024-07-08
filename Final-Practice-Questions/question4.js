/* I didn't understand this question really at all. I knew what it wanted but I didn't know how to navigate through objects.

Widgets Inc is a production company with several plants around the world. They have recently
started a project to analyze the efficiency of their production process. In each plant, widgets are
manufactured in a sequence of steps, where each step can only begin once the previous step
has been completed. Each plant has a different sequence of steps, and the time it takes to
complete each step also varies between plants.
You are given an array of JavaScript objects, where each object represents a plant and contains
the properties "id" and "productionSteps". The "id" property is a unique string identifier for the
plant, and "productionSteps" is an array where each element is another object that has a "step"
property (a string identifying the step) and a "time" property (a number indicating the time it
takes to complete that step).
Your task is to write a JavaScript function that takes this array as input and returns a new
JavaScript object. The keys of this object should be the ids of the plants, and the values should
be objects where the keys are the steps and the values are the total time it would take to reach
that step (including the time for that step itself). The steps should appear in the order they are
completed.
*/

const plants = [
  {
    id: "Plant1",
    productionSteps: [
      { step: "Step1", time: 5 },
      { step: "Step2", time: 7 },
      { step: "Step3", time: 2 },
    ],
  },
  {
    id: "Plant2",
    productionSteps: [
      { step: "StepA", time: 3 },
      { step: "StepB", time: 4 },
      { step: "StepC", time: 8 },
    ],
  },
];

calculateTotalTimes(plants);

function calculateTotalTimes(plants) {
  let output = {};
  for (let plant of plants) {
    let totalTime = 0;
    output[plant.id] = {};
    for (let step of plant.productionSteps) {
      totalTime += step.time;
      output[plant.id][step.step] = totalTime;
    }
  }
  console.log(output);
}
