/* Another question where I understand what it wants, but we weren't taught enough on how to navigate through objects.
ABC corporation has many employees, some of which are managers, others which are
employees. Each employee has a manager, and some managers have a manager who
oversees them. Each employee knows who manages them but unfortunately the managers
have lost their org chart making it difficult for them to remember which employees are below
them in the hierarchy.
For this question you’ll be given an array of javascript objects representing employee
information. Each employee has a unique “id” property, and every employee that has a manager
has a “manager” property that stores the “id” of their manager. Your job is to return a new
javascript object that contains the ids of managers as properties, where each property stores an
array of the unique ids of all employees beneath that manager in the hierarchy. You may
assume any manager referenced will always exist in the array. See the sample inputs for further
explanation.
*/

const managers = [
  { id: "1", manager: "2" },
  { id: "2", manager: "3" },
  { id: "3" },
  { id: "4", manager: "3" },
];

buildHierarchy(managers);

function buildHierarchy(employees) {
  let hierarchy = {};
  // Initialize hierarchy
  for (let employee of employees) {
    if (!hierarchy[employee.id]) {
      hierarchy[employee.id] = [];
    }
    if (employee.manager) {
      if (!hierarchy[employee.manager]) {
        hierarchy[employee.manager] = [employee.id];
      } else {
        hierarchy[employee.manager].push(employee.id);
      }
    }
  }

  // Function to get all reports iteratively
  function getReports(manager) {
    let reports = [];
    let queue = [...hierarchy[manager]];
    while (queue.length > 0) {
      let current = queue.shift();
      reports.push(current);
      // Add the direct reports of the current employee to the queue
      queue.push(...hierarchy[current]);
    }
    return reports;
  }

  // Build the final hierarchy with indirect reports
  let finalHierarchy = {};
  for (let manager in hierarchy) {
    if (hierarchy[manager].length > 0) {
      finalHierarchy[manager] = getReports(manager);
    }
  }
  console.log(finalHierarchy);
}
