const filterActivities = (activities: any[], query: string) => {
  return activities.filter((act: any) =>
    act.title.toLowerCase().includes(query.toLowerCase())
  );
};

const getPozzlers = (activities: any[]) => {
  let pozzlers: any = {};
  let grouped: any[] = [];
  for (let i = 0; i < activities.length; i++) {
    for (let j = 0; j < activities[i].pozzles.length; j++) {
      if (
        !Object.keys(pozzlers).includes(activities[i].pozzles[j]['createdBy'])
      ) {
        pozzlers[activities[i].pozzles[j]['createdBy']] = [
          activities[i].pozzles[j],
        ];
      } else {
        pozzlers[activities[i].pozzles[j]['createdBy']].push(
          activities[i].pozzles[j],
        );
      }
    }
  }


  Object.keys(pozzlers).map(pozzler =>
    grouped.push({ pozzler: pozzler, pozzles: pozzlers[pozzler] }),
  );
  return grouped;
};

const filterPozzlers=(pozzlers:any[],query:string)=>{
return pozzlers.filter(poz=>poz.pozzler.includes(query))
}



export { filterActivities, getPozzlers,filterPozzlers, };


