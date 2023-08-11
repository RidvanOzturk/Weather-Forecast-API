const Component = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  return<Component />;
}