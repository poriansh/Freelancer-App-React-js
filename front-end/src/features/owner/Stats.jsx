function Stats({projects}) {
  const numOfProject = projects.length;
  console.log(numOfProject);
  const numOfAccepted = projects.map((p) => p.status === 2).length;
  console.log(numOfAccepted);
//    projects.reduce((acc, curr) => curr.proposal.length + acc, 0);
//   console.log();
  return <div></div>;
}

export default Stats;
