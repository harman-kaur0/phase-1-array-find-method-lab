function superbowlWin(record) {
  let W = record.find((obj) => obj.result === "W");
  if (W !== undefined) {
    return W.year;
  }
  return undefined;
}
