export default function SortingForm({onSubmit}) {

  function sorting(e) {
    const {value} = e.target;
    let order = {};

    switch(value) {
      case "date_descend":
        order = {
          field: "date_read",
          sort: -1,
        }
        break;
      case "date_ascend":
        order = {
          field: "date_read",
          sort: 1,
        }
        break;
      case "rate_descend":
        order = {
          field: "rate",
          sort: -1,
        }
        break;
      case "rate_ascend":
        order = {
          field: "rate",
          sort: 1,
        }
        break;
      case "title_ascend":
        order = {
          field: "title",
          sort: 1,
        }
        break;
      case "title_descend":
        order = {
          field: "title",
          sort: -1,
        }
        break;
    }
    return order;
  }

  function changeOrderAndSubmitForm(e) {
      const order = sorting(e);
      onSubmit(order);
  }

  return (
    <div id="sorting">
      <form id="sortingForm">
        <label htmlFor="order_select">Sort by </label>
        <select
          name="order"
          id="order_select"
          onChange={changeOrderAndSubmitForm}
        >
          <option value="date_descend" >Latest Read</option>
          <option value="date_ascend">Earliest Read</option>
          <option value="rate_descend">Top Rate</option>
          <option value="rate_ascend">Lowest Rate</option>
          <option value="title_ascend">Title (A to Z)</option>
          <option value="title_descend">Title (Z to A)</option>
        </select>
      </form>
    </div>
  );
}
