declare class ApiServices<Req, Res> {
    createData(url: string, Data: Req): Promise<Res>;
    getData(url: string): Promise<Res>;
    getDataById(url: string, id: string): Promise<Res>;
    updateData(url: string, id: string, Data: Req): Promise<Res>;
    deleteData(url: string, id: string): Promise<Res>;
    changeEmplyeeState(url: string, id: string): Promise<Res>;
}
export default ApiServices;
