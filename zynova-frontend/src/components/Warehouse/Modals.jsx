import axios from "axios";
import { useState, useEffect, useRef } from "react";
import CommonDialog from "../shared/Modal";
import PropTypes from "prop-types";

const StockEditDialog = ({ warehouse, stockItem, setOpenHook, open }) => {
    StockEditDialog.propTypes = {
        warehouse: PropTypes.object.isRequired,
        stockItem: PropTypes.object.isRequired,
        setOpenHook: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired
    };

    const handleClose = () => {
        setOpenHook(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        axios.patch(`http://localhost:8080/api/warehouse/${warehouse.id}/stock/${stockItem.stockId}`, formJson)
            .then((response) => {
                if (response.data) {
                    alert("Stock updated successfully");
                    window.location.reload();
                }
            })
            .catch((error) => {
                alert("Error updating stock");
                console.error(error);
            });
        handleClose();
    };

    return (
        <CommonDialog open={open} onClose={handleClose} modalTitle="Edit Stock" bodySection={
            <form onSubmit={handleSubmit} id="editStockForm">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 sr-only" htmlFor="stockId">
                        Stock ID
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="stockId"
                        type="number"
                        name="stockId"
                        defaultValue={stockItem?.productId}
                        hidden={true}
                        readOnly={true}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availableStock">
                        Available Stock
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="availableStock"
                        type="number"
                        name="availableStock"
                        defaultValue={stockItem?.availableStock}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullStock">
                        Full Stock
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fullStock"
                        type="number"
                        name="fullStock"
                        defaultValue={stockItem?.fullStock}
                    />
                </div>
            </form>
        } actionButton={
            <button
                className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                form="editStockForm"
            >
                Update
            </button>
        } />
    );
};


const WarehouseEditDialog = ({ warehouse, setOpenHook, open }) => {

    WarehouseEditDialog.propTypes = {
        warehouse: PropTypes.object.isRequired,
        setOpenHook: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired
    }

    const handleClose = () => {
        setOpenHook(false);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        axios.put(`http://localhost:8080/api/warehouse/${warehouse.id}`, formJson)
            .then((response) => {
                if (response.data) {
                    alert("Warehouse updated successfully");
                    window.location.reload();
                }
            })
            .catch((error) => {
                alert("Error updating warehouse");
                console.error(error);
            });

        handleClose();
    };

    return (
        <CommonDialog open={open} onClose={handleClose} modalTitle="Edit Warehouse" bodySection={
            <form onSubmit={handleUpdate} id="editWarehouseForm">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Warehouse ID
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="number"
                        name="id"
                        defaultValue={warehouse?.id}
                        disabled={true}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="managerId">
                        Location
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="managerId"
                        type="text"
                        name="location"
                        defaultValue={warehouse?.location}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="managerName">
                        Manager Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="managerName"
                        type="text"
                        name="managerName"
                        defaultValue={warehouse?.managerName}
                    />
                </div>
            </form>
        } actionButton={
            <button
                className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                form="editWarehouseForm"
            >
                Update
            </button>
        } />
    );

};

const DeleteWarehouseDialog = ({ warehouse, open, setOpenHook }) => {
    DeleteWarehouseDialog.propTypes = {
        warehouse: PropTypes.object.isRequired,
        open: PropTypes.bool.isRequired,
        setOpenHook: PropTypes.func.isRequired
    }

    const handleClose = () => {
        setOpenHook(false);
    };
    const handleDelete = async () => {
        await axios.delete(`http://localhost:8080/api/warehouse/${warehouse.id}`);
        window.location.href = "/warehouses";
        setOpenHook(false);
    };

    return (
        <CommonDialog open={open} onClose={handleClose} modalTitle="Delete Warehouse" bodySection={
            <div className="mb-4">
                <p className="text-lg">Are you sure you want to delete Warehouse {warehouse?.id}?</p>
                <p className="text-base text-red-500">This action cannot be undone.</p>
            </div>
        } actionButton={
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleDelete}
                disabled={true}
            >
                Delete
            </button>
        } />
    );
};

const AddStockDialog = ({ warehouse, open, setOpenHook }) => {

    AddStockDialog.propTypes = {
        warehouse: PropTypes.object.isRequired,
        open: PropTypes.bool.isRequired,
        setOpenHook: PropTypes.func.isRequired
    }

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClose = () => {
        setSelectedProduct(null);
        form.current.reset();
        setOpenHook(false);
    };

    const form = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/api/product`);
                setProducts(data);
            } catch (error) {
                alert("Error fetching data");
            }
        }
        fetchProducts();
    }, []);

    const handleStockSubmit = (event) => {
        event.preventDefault();
        if (!selectedProduct || !event.currentTarget.productId.value) {
            alert("Please select a product");
        }
        if (warehouse.id) {
            const formData = new FormData(form.current);
            const formJson = Object.fromEntries(formData.entries());
            axios.post(`http://localhost:8080/api/warehouse/${warehouse.id}/stock`, formJson)
                .then((response) => {
                    if (response.data) {
                        alert("Stock added successfully");
                        window.location.reload();
                        return;
                    }
                    throw new Error("Error adding stock");
                })
                .catch(() => {
                    alert("Error adding stock");
                });
        }
        setOpenHook(false);
    }

    return (
        <CommonDialog open={open} onClose={handleClose} modalTitle="Add Stock" bodySection={
            <form ref={form} onSubmit={handleStockSubmit} id="addStockForm">
                <div className="mb-4">
                    {selectedProduct &&
                        <div className="flex items-center gap-2 mb-2">
                            <img src={selectedProduct?.imageUrl} alt={selectedProduct?.name} className="w-16 h-16 border-2 border-primary rounded-full" />
                            <span className="text-lg">{selectedProduct?.name}</span>
                        </div>
                    }
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productId">
                        Product
                    </label>
                    <select id="productId"
                        name="productId"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => setSelectedProduct(products.find(product => product.id === parseInt(e.target.value)))}
                    >
                        <option value="">Select Product</option>
                        {products.map(product => {
                            return <option key={product.id} value={product.id}>{product.name}</option>
                        })}

                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availableStock">
                        Available Stock (kg)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="availableStock"
                        name="availableStock"
                        type="number"
                        placeholder="Available Stock"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullStock">
                        Full Stock (kg)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fullStock"
                        name="fullStock"
                        type="number"
                        placeholder="Full Stock"
                    />
                </div>
            </form>

        } actionButton={
            <button
                className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                form="addStockForm"
            >
                Add
            </button>
        } />
    )
};

const DeleteStockDialog = ({ warehouse, product: stock, open, setOpenHook }) => {
    DeleteStockDialog.propTypes = {
        warehouse: PropTypes.object.isRequired,
        product: PropTypes.object.isRequired,
        open: PropTypes.bool.isRequired,
        setOpenHook: PropTypes.func.isRequired
    }

    if (!warehouse || !stock) {
        return null;
    }

    const warehouseId = warehouse.id;
    const stockId = stock.stockId;
    const handleClose = () => {
        setOpenHook(false);
    };

    const handleDelete = async () => {
        const deleteUrl = `http://localhost:8080/api/warehouse/${warehouseId}/stock/${stockId}`
        const response = await axios.delete(deleteUrl);
        if (response.data) {
            alert("Stock deleted successfully");
            setOpenHook(false);
            window.location.reload();
        }
    };

    return (
        <CommonDialog open={open} onClose={handleClose} modalTitle="Delete Stock" bodySection={
            <div className="mb-4">
                <p className="text-lg">Are you sure you want to delete current stock?</p>
                <div className="flex items-center justify-center gap-8 p-4 border border-gray-200 m-2 rounded-lg">
                    <img src={stock?.productIcon} alt={stock?.productName} className="w-16 h-16 border-2 border-primary rounded-full" />
                    <div>
                        <p className="text-lg">{stock?.productName}</p>
                        <p className="text-sm text-gray-500">Product ID: {stock?.productId}</p>
                        <p className="text-sm text-gray-500">Available Stock: {stock?.availableStock} kg</p>
                        <p className="text-sm text-gray-500">Full Stock: {stock?.fullStock} kg</p>
                    </div>
                </div>
                <p className="text-base text-red-500">This action cannot be undone.</p>
            </div>
        } actionButton={
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleDelete}
            >
                Delete
            </button>
        } />
    );

}

export { StockEditDialog, WarehouseEditDialog, DeleteWarehouseDialog, AddStockDialog, DeleteStockDialog };