import {MDBBtn, MDBCardImage, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTooltip, MDBTypography} from "mdb-react-ui-kit";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const SingleCard = (fields:any) => {
    return (
        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
            <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                    fluid className="rounded-3" alt="Cotton T-shirt" />
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3">
                <MDBTypography tag="h6" className="text-muted">
                    Shirt
                </MDBTypography>
                <MDBTypography tag="h6" className="text-black mb-0">
                    Cotton T-shirt
                </MDBTypography>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    <MDBBtn className="px-3 me-2">
                        <MDBIcon fas icon="minus" />
                    </MDBBtn>

                    <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />

                    <MDBBtn className="px-3 ms-2">
                        <MDBIcon fas icon="plus" />
                    </MDBBtn>
                </div>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="text-end">
                <MDBTypography tag="h6" className="mb-0">
                    € 44.00
                </MDBTypography>
            </MDBCol>
            <MDBCol md="1" lg="1" xl="1" className="text-end">
                {/*<a href="#!" className="text-muted">*/}
                {/*    <MDBIcon fas icon="times" />*/}
                {/*</a>*/}
                <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                            title="Remove item">
                    <MDBIcon fas icon="trash" />
                </MDBTooltip>
            </MDBCol>
        </MDBRow>

    );
};

export default SingleCard;