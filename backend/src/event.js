import Henesis from '@haechi-labs/henesis-sdk-js'

export default async function ({config, model}) {
  const henesis = new Henesis();
  const subscription = await henesis.subscribe(
    config.integrationId,
    "streamedBlock"
  );
  subscription.on('message', async (message) => {
    const events = messageToEvents(message);
    events.forEach(event => model.save(event));
    console.log(`data received, event:${events}`);
    message.ack();
  });

  subscription.on('error', err => {
    console.error(err);
  });

  //parsing logic
  function messageToEvents(message) {
    const events = message.data.events;
    const blockMeta = message.data.blockMeta;
    return events.map(event => {
      return {
        event: event.eventName.split('(')[0],
        contract: event.contractName,
        transactionHash: event.transaction.hash,
        args: dataToArgs(event.data),
        blockMeta
      }
    });
    function dataToArgs(data) {
      const res = {};
      for (let item of data) {
        res[item.name] = item.value;
      }
      return res;
    }
  }
}
