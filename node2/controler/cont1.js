const grab = async (req, res) => {
  const { name, id, password } = req.body;
  //   const { idd } = req.query;
  //   console.log(idd);
  const { idd } = req.params;
    const dat = { name, id, password };
    console.log(idd)
  res.json(dat);

  //   res.json({ name,id,password });
};
export default grab;
