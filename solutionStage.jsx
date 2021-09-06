const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      <div id="deposit">Deposit / Withdraw : </div>
      <br/>
      <div id="instruction">Use positive numbers to deposit.<br/>Use negative numbers to withdraw.</div>
      <br/>
      <input type="number" id="moneyinput" onChange={onChange} placeholder='0'></input>
      <br/>
      <br/>
      <input type="submit" id="submitbutton" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  let transactionState = 0; // state of this transaction
  let totalState = 0; // Account total at Bank
  let status = "Account Balance $ "+totalState;
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    transactionState = Number(event.target.value);
  };
  const handleSubmit = () => {
    
    if (transactionState < 0 && totalState <= 0)
    {
      window.alert('You cannot withdraw due to insufficient funds.');
      document.getElementById('moneyinput').value = '';
      event.preventDefault();
    }
    else if (transactionState == 0)
    {
      window.alert('Please do not deposit $ 0 into your account.');
      document.getElementById('moneyinput').value = '';
      event.preventDefault();
    }
    else if ((transactionState * -1) > totalState)
    {
      window.alert('You cannot withdraw due to insufficient funds.');
      document.getElementById('moneyinput').value = '';
      event.preventDefault();
    }
    else
    {
      totalState += transactionState;
      if (transactionState < 0)
        {
          window.alert('You has withdraw $'+(transactionState*-1)+'\nYour account balance is $'+totalState);
          document.getElementById('moneyinput').value = '';
        }
      else
      {
        window.alert('You has deposit $'+transactionState+'\nYour account balance is $'+totalState);
        document.getElementById('moneyinput').value = '';
      }
      status = `Account Balance $ ${totalState}`;
      document.getElementById("total").innerHTML = status;
      event.preventDefault();
    }
   
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <br/>
      <div id="depositbox">
      <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
      </div>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
